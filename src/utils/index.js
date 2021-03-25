export const showPrice = (price) => price / 100  + "€ "


export const showDuration = (duration) =>  {
    const hours = Math.floor(duration / 60);  
    let minutes = duration % 60;
    if (minutes === 0) minutes= '00'
    return hours + "h" + minutes;       
}