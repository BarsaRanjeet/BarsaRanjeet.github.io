

export const parseExpYears = (experiences) => experiences.map(({ startDate, endDate }) => startDate && endDate ? [startDate, endDate] : [startDate]);