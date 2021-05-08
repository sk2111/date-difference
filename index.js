//Helper to create DOM node
const createDOMNode = (tagName, content = '', attribute = []) => {
    const elem = document.createElement(tagName);
    elem.innerText = content;
    if (Array.isArray(attribute) && attribute.length) {
        attribute.forEach(({ name, value }) => {
            elem.setAttribute(name, value);
        });
    }
    return elem;
};

// creating DOM nodes
const dateDiv = createDOMNode('div', '', [{ name: 'class', value: 'container' }]);
const inputDate = createDOMNode('input', '', [{ name: 'id', value: 'date-input' }, { name: 'type', value: 'date' }]);
const button = createDOMNode('button', 'DisplayData', [{ name: 'class', value: 'display-btn' }, { name: 'onclick', value: 'displayData()' }]);
const displayNode = createDOMNode('div', '', [{ name: 'id', value: 'display-content' }]);

//Attach to DOM node
dateDiv.append(inputDate, button);
document.body.append(dateDiv, displayNode);
const dateRef = document.getElementById("date-input");
const displayRef = document.getElementById("display-content");

//calculate month difference between given dates
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
                <p>Day ${Math.floor(diffDay)}</p>
                <p>Hour ${Math.floor(diffHour)}</p>
                <p>Hour ${Math.floor(diffHour)}</p>
                <p>Minutes ${Math.floor(diffMin)}</p>
                <p>Seconds ${Math.floor(diffSeconds)}</p>
                <p>Milli Seconds ${Math.floor(diffMilliSeconds)}</p>
            `;
            displayRef.innerHTML = template;
        }
    }
}