
export function _fetch(url, params) {
    return fetch("https://dev.zijinshe.com/cms" + url, params)
}
export function imgurl(url) {
    return "https://dev.zijinshe.com/cms/" + url
}
export function getgradesinfo() {
    var grades = [];
    var grade = {};
    var date = new Date;
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    //如果当前月份大于等于9 则一年级入学年份为今年 否则为去年
    if (month >= 9) {
        grade = {}; grade.startYear = year; grade.studySection = '小学'; grade.name = '一年级'; grades.push(grade);
        grade = {}; grade.startYear = year - 1; grade.studySection = '小学'; grade.name = '二年级'; grades.push(grade);
        grade = {}; grade.startYear = year - 2; grade.studySection = '小学'; grade.name = '三年级'; grades.push(grade);
        grade = {}; grade.startYear = year - 3; grade.studySection = '小学'; grade.name = '四年级'; grades.push(grade);
        grade = {}; grade.startYear = year - 4; grade.studySection = '小学'; grade.name = '五年级'; grades.push(grade);
        grade = {}; grade.startYear = year - 5; grade.studySection = '小学'; grade.name = '六年级'; grades.push(grade);

        grade = {}; grade.startYear = year; grade.studySection = '初中'; grade.name = '七年级'; grades.push(grade);
        grade = {}; grade.startYear = year - 1; grade.studySection = '初中'; grade.name = '八年级'; grades.push(grade);
        grade = {}; grade.startYear = year - 2; grade.studySection = '初中'; grade.name = '九年级'; grades.push(grade);

        grade = {}; grade.startYear = year; grade.studySection = '高中'; grade.name = '高一'; grades.push(grade);
        grade = {}; grade.startYear = year - 1; grade.studySection = '高中'; grade.name = '高二'; grades.push(grade);
        grade = {}; grade.startYear = year - 2; grade.studySection = '高中'; grade.name = '高三'; grades.push(grade);
    } else {
        grade = {}; grade.startYear = year - 1; grade.studySection = '小学'; grade.name = '一年级'; grades.push(grade);
        grade = {}; grade.startYear = year - 2; grade.studySection = '小学'; grade.name = '二年级'; grades.push(grade);
        grade = {}; grade.startYear = year - 3; grade.studySection = '小学'; grade.name = '三年级'; grades.push(grade);
        grade = {}; grade.startYear = year - 4; grade.studySection = '小学'; grade.name = '四年级'; grades.push(grade);
        grade = {}; grade.startYear = year - 5; grade.studySection = '小学'; grade.name = '五年级'; grades.push(grade);
        grade = {}; grade.startYear = year - 6; grade.studySection = '小学'; grade.name = '六年级'; grades.push(grade);

        grade = {}; grade.startYear = year - 1; grade.studySection = '初中'; grade.name = '七年级'; grades.push(grade);
        grade = {}; grade.startYear = year - 2; grade.studySection = '初中'; grade.name = '八年级'; grades.push(grade);
        grade = {}; grade.startYear = year - 3; grade.studySection = '初中'; grade.name = '九年级'; grades.push(grade);

        grade = {}; grade.startYear = year - 1; grade.studySection = '高中'; grade.name = '高一'; grades.push(grade);
        grade = {}; grade.startYear = year - 2; grade.studySection = '高中'; grade.name = '高二'; grades.push(grade);
        grade = {}; grade.startYear = year - 3; grade.studySection = '高中'; grade.name = '高三'; grades.push(grade);
    }

    return grades;
}
export function setTitle(title){
    
}