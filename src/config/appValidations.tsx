//global functions to use in any file 


//convert the first letter in each word in a string to an Uppercase letter
export const upperFirstLetters = (text: string) => {
    return text?.split(' ').map((item) => item[0]?.toUpperCase() + item?.substring(1)).join(' ')
}


