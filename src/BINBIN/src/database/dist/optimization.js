"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.optimizeDatabase = void 0;
exports.optimizeDatabase = function (sequelize) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: 
            // 1. Create materialized views for frequent queries
            return [4 /*yield*/, sequelize.query("\n    CREATE MATERIALIZED VIEW IF NOT EXISTS weekly_schedule_summary AS\n    SELECT \n      s.week_number,\n      s.year,\n      COUNT(se.id) as entries_count,\n      COUNT(DISTINCT se.operator_id) as operators_count,\n      COUNT(DISTINCT se.machine_id) as machines_count\n    FROM schedules s\n    LEFT JOIN schedule_entries se ON s.id = se.schedule_id\n    GROUP BY s.id;\n  ")];
            case 1:
                // 1. Create materialized views for frequent queries
                _a.sent();
                // 2. Create indexes for common query patterns
                return [4 /*yield*/, sequelize.query("\n    CREATE INDEX IF NOT EXISTS idx_schedule_operator_date ON schedule_entries(operator_id, date);\n    CREATE INDEX IF NOT EXISTS idx_schedule_machine_date ON schedule_entries(machine_id, date);\n  ")];
            case 2:
                // 2. Create indexes for common query patterns
                _a.sent();
                // 3. Configure database parameters
                return [4 /*yield*/, sequelize.query("\n    ALTER SYSTEM SET work_mem = '64MB';\n    ALTER SYSTEM SET maintenance_work_mem = '256MB';\n    ALTER SYSTEM SET random_page_cost = 1.1;\n    ALTER SYSTEM SET effective_cache_size = '4GB';\n  ")];
            case 3:
                // 3. Configure database parameters
                _a.sent();
                // 4. Set up partitioning for large tables
                return [4 /*yield*/, sequelize.query("\n    CREATE TABLE IF NOT EXISTS schedule_entries_partitioned (\n      LIKE schedule_entries INCLUDING INDEXES\n    ) PARTITION BY RANGE (date);\n    \n    CREATE TABLE schedule_entries_y2023 PARTITION OF schedule_entries_partitioned\n      FOR VALUES FROM ('2023-01-01') TO ('2024-01-01');\n  ")];
            case 4:
                // 4. Set up partitioning for large tables
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
