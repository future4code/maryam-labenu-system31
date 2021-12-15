export const formatDate = (stringDate: string): string | null => {
    try {
        if (typeof stringDate !== "string") throw new Error()
    
        let newDate: string | string[] | Date = stringDate.split("/")
        if (newDate.length !== 3) throw new Error()
    
        const day = Number(newDate[0])
        const month = Number(newDate[1])
        const year = Number(newDate[2])
    
        if (!day || !month || !year) throw new Error()
        
        newDate = new Date(`${year}/${month}/${day}`)
        
        if (!newDate) throw new Error()
        if (!(newDate instanceof Date)) throw new Error()
        if (isNaN(newDate.getTime())) throw new Error()
    
        return newDate.toLocaleDateString("pt-br")
        
    } catch (error) {

        return null
    }
}