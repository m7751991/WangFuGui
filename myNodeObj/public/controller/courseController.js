let course = require('../../mysql/course/course')
class Course {
    constructor() { }
    async getCourseList(req, res, next) {
        let sql = `select * from course`;
        let data = await course.selectCourseAllList(sql);
        res.send({ code: 200, data: data });
    }
}
module.exports = new Course();