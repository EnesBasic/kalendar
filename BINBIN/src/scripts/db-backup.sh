#!/bin/bash
DATE=$(date +%Y%m%d%H%M%S)
BACKUP_DIR="/var/backups/scheduler"
mkdir -p $BACKUP_DIR

PGPASSWORD=$DB_PASSWORD pg_dump -h $DB_HOST -U $DB_USER -d $DB_NAME \
  -F c -b -v -f "$BACKUP_DIR/scheduler_$DATE.dump"

# Encrypt backup
gpg --batch --yes --passphrase $ENCRYPTION_KEY \
  -c "$BACKUP_DIR/scheduler_$DATE.dump"

# Upload to S3
aws s3 cp "$BACKUP_DIR/scheduler_$DATE.dump.gpg" s3://$S3_BUCKET/backups/

# Cleanup old backups (keep 7 days)
find $BACKUP_DIR -type f -mtime +7 -exec rm {} \;