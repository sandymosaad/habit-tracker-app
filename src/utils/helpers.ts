export function getCurrentDate(): string {
    //Thursday, August 6



  const currentDate = new Date();
    const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
    };
    return currentDate.toLocaleDateString(undefined, options);
 
}

