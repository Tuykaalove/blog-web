const categories = [
    {
        id: 1,
        name: 'Улс төр',
    },
    {
        id: 20,
        name: 'Нийгэм',
    },
    {
        id: 45,
        name: 'Спорт',
    },

]
export function CategoryList() {
    return <div>
        {
            categories.map((cat1) => (
                <div className="mb-4" key={cat1.id}>
                    {cat1.name}

                </div>
            ))
        }
        
    </div>;
}