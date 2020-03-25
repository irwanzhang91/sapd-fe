export function getShortMonthName(month) {
  let monthName = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]

  return monthName[month]
}

export function getFullDate(date) {
  return date.getDate() + ' ' + getShortMonthName(date.getMonth()) + ' ' + date.getFullYear()
}

export function getFullDateTime(date) {
  return date.getDate() + ' ' + getShortMonthName(date.getMonth()) + ' ' + date.getFullYear() + ' ' + date.getHours() + ':' + ( '0' + date.getMinutes()).slice(-2) + ':' + ( '0' + date.getSeconds()).slice(-2)
}

export function getSQLDate(date) {
  return date.getFullYear() + '-' + ('0' + (date.getMonth()+1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2)
}

export function getDayList() {
  let days = []
  for(let i = 1; i <= 7; i++) {
    days.push({
      value: i,
      label: getDayName(i)
    })
  }
  return days
}

export function getDayName(num) {
  switch(num) {
    case 1:
    return 'Monday';
    case 2:
    return 'Tuesday';
    case 3:
    return 'Wednesday';
    case 4:
    return 'Thursday';
    case 5:
    return 'Friday';
    case 6:
    return 'Saturday';
    case 7:
    return 'Sunday';
    default:
    return "Monday"
  }
}

export function getMonthName(num) {
  switch(num) {
    case 1:
    return 'January';
    case 2:
    return 'February';
    case 3:
    return 'March';
    case 4:
    return 'April';
    case 5:
    return 'May';
    case 6:
    return 'June';
    case 7:
    return 'July';
    case 8:
    return 'August';
    case 9:
    return 'September';
    case 10:
    return 'October';
    case 11:
    return 'November';
    case 12:
    return 'December';
    default:
    return "January"
  }
}

export function getMonthArray() {
  let months = [
    {value: 1, label: 'January'},
    {value: 2, label: 'February'},
    {value: 3, label: 'March'},
    {value: 4, label: 'April'},
    {value: 5, label: 'May'},
    {value: 6, label: 'June'},
    {value: 7, label: 'July'},
    {value: 8, label: 'August'},
    {value: 9, label: 'September'},
    {value: 10, label: 'October'},
    {value: 11, label: 'November'},
    {value: 12, label: 'December'}
  ]

  return months
}
