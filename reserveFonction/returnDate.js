export default function ReturnDate(date, returnYears) {
    if(returnYears == false)
        {
            return(new Date(date).getDate() + " / " + (new Date(date).getMonth() + 1))
        }
    return(new Date(date).getDate() + " / " + (new Date(date).getMonth() + 1) + " / " +  new Date(date).getFullYear())
    
}