export function BrazilianFormatDate(dateObj){
    const dateValue = new Date(dateObj);
    return `${dateValue.getDate()}/${dateValue.getMonth() + 1}/${dateValue.getFullYear()}`
}