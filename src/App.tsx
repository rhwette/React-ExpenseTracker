import { useState } from 'react';
import ExpenseList from './expense-tracker/components/ExpenseList/ExpenseList';
import ExpenseFilter from './expense-tracker/components/ExpenseFilter/ExpenseFilter';
import ExpenseForm from './expense-tracker/components/ExpenseForm/ExpenseForm';
import categories from './expense-tracker/categories';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'aaa', amount: 10, category: 'Utilities' },
    { id: 2, description: 'bbb', amount: 11, category: 'Utilities' },
    { id: 3, description: 'ccc', amount: 12, category: 'Utilities' },
    { id: 4, description: 'ddd', amount: 13, category: 'Utilities' },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      <div className="expenseForm">
        <ExpenseForm
          onSubmit={(newExpense) =>
            setExpenses([
              ...expenses,
              { ...newExpense, id: expenses.length + 1 },
            ])
          }
        />
      </div>
      <div className="filterList">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
