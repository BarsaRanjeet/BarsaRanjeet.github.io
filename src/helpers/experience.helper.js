
const parseDateString = (dateStr, format = 'DD/MM/YYYY') => {
    const parts = dateStr.trim().split(/[\/\-\.]/);
    if (parts.length !== 3) return new Date(dateStr);

    let day, month, year;
    if (format === 'DD/MM/YYYY') {
        [day, month, year] = parts.map(Number);
    } else if (format === 'MM/DD/YYYY') {
        [month, day, year] = parts.map(Number);
    } else {
        [year, month, day] = parts.map(Number);
    }
    return new Date(year, month - 1, day);
}

const mergeIntervals = (intervals) => {
    if (intervals.length <= 1) return intervals;

    const sorted = [...intervals].sort((a, b) => a.start.getTime() - b.start.getTime());
    const merged = [];
    let current = sorted[0];

    for (let i = 1; i < sorted.length; i++) {
        const next = sorted[i];
        if (next.start.getTime() <= current.end.getTime()) {
            if (next.end.getTime() > current.end.getTime()) {
                current = { start: current.start, end: next.end };
            }
        } else {
            merged.push(current);
            current = next;
        }
    }
    merged.push(current);
    return merged;
}

export const calculateExperience = (rawIntervals, dateFormat = 'DD/MM/YYYY') => {
    const currentDate = new Date();

    const parsedIntervals = rawIntervals.map(([startStr, endStr]) => {
        const start = parseDateString(startStr, dateFormat);
        const end = endStr ? parseDateString(endStr, dateFormat) : currentDate;
        return { start, end };
    });

    const merged = mergeIntervals(parsedIntervals);

    let totalDays = 0;
    for (const interval of merged) {
        const diffMs = interval.end.getTime() - interval.start.getTime();
        totalDays += diffMs / (1000 * 60 * 60 * 24);
    }

    const daysInYear = 365.2425;
    const daysInMonth = 30.436875;

    let years = Math.floor(totalDays / daysInYear);
    let remainingDays = totalDays % daysInYear;
    let months = Math.floor(remainingDays / daysInMonth);
    let days = Math.round(remainingDays % daysInMonth);

    if (days >= 30) {
        months += 1;
        days -= 30;
    }
    if (months >= 12) {
        years += 1;
        months -= 12;
    }

    const parts = [];
    if (years > 0) parts.push(`${years} year${years > 1 ? 's' : ''}`);
    if (months > 0) parts.push(`${months} month${months > 1 ? 's' : ''}`);
    if (years === 0 && months === 0) parts.push(`${days} day${days > 1 ? 's' : ''}`);

    return {
        years,
        months,
        days,
        formatted: parts.join(' and ') || '0 days'
    };
}
