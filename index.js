
const dateRef = document.getElementById("date-input");
const displayRef = document.getElementById("display-content");


const monthDifference = (currentDate, userDate, diffYear) => {
    const monthDiff = currentDate.getMonth() - userDate.getMonth();
    return monthDiff + (12 * diffYear);
};

const displayData = () => {
    if (dateRef.value) {
        const userDate = new Date(dateRef.value);
        const currentDate = new Date();
        const difference = currentDate - userDate;
        if (difference < 0) {
            displayRef.innerHTML = `<p>Input date cannot be greater than today's date</p>`;
        }
        else {
            const diffYear = currentDate.getFullYear() - userDate.getFullYear();
            const diffDay = (currentDate.getTime() - userDate.getTime()) / (1000 * 60 * 60 * 24);
            const diffHour = diffDay * 24;
            const diffMin = diffHour * 60;
            const diffSeconds = diffMin * 60;
            const diffMilliSeconds = currentDate.getTime() - userDate.getTime();
            const template = `
                <p>Given input date is ${userDate}</p>
                <p>Year ${diffYear}</p>
                <p>Month ${monthDifference(currentDate, userDate, diffYear)}</p>
                <p>Day ${parseInt(diffDay)}</p>
                <p>Hour ${parseInt(diffHour)}</p>
                <p>Minutes ${parseInt(diffMin)}</p>
                <p>Seconds ${parseInt(diffSeconds)}</p>
                <p>Milli Seconds ${parseInt(diffMilliSeconds)}</p>
            `;


            displayRef.innerHTML = template;
        }
    }
}