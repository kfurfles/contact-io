export function BrazilianFormatDate(dateObj: string){
    const dateValue = new Date(dateObj.slice(0,19));
    return `${dateValue.getDate()}/${dateValue.getMonth() + 1}/${dateValue.getFullYear()}`
}