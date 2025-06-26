export const metricsClient: {
  histogram: (name: string, labels: Record<string, any>) => {
    observe: (value: number) => void;
  };
  gauge: (name: string) => {
    set: (value: number) => void;
  };
};
