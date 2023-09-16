module.exports = (htmlStr, course) => {

    let output = htmlStr
        .replace(/{%NAME%}/g, course.courseName)
        .replace(/{%IMAGE%}/g, course.image)
        .replace(/{%FROM%}/g, course.from)
        .replace(/{%INSTRUCTOR%}/g, course.instructor)
        .replace(/{%CREDITS%}/g, course.credits)
        .replace(/{%DESCRIPTION%}/g, course.description)
        .replace(/{%ID%}/g, course.id);
    return output;
}