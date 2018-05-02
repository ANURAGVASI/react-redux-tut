// get all Expenses based on filters

export const getVisibleExpenses = (expenses,{ text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateFilter = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateFilter = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textFilter = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateFilter && endDateFilter && textFilter;
    })
    .sort((a,b) => {
        if(sortBy === 'date')
            return a.createdAt -b.createdAt
        
        else if(sortBy === 'amount')
            return a.amount - b.amount        
        
    })
}

