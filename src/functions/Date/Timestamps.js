export const getNowTS = () => new Date().toISOString();

export const getYesterdayServerTS = () => getPastTimestamp(24);

export const getPastTimestamp = (hoursAgo) => {
    if (!hoursAgo) return getNowTS();

    const ts = Math.round(new Date().getTime() / 1000);
    const secondsSinceEpoch = (ts - (hoursAgo * 3600));
    const newDate = new Date(0); // new date default to Epoch date
    newDate.setSeconds(secondsSinceEpoch)
    return newDate.toISOString();
}