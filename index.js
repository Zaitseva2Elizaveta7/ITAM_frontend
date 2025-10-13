//№1
function calculateGrade(students){
    let students_itog = [];
    for(let person of students){
        let summ = 0;
        let k=0;
        for(let i = 0; i<person.scores.length;i++){
            summ+=person.scores[i];
            k++;
        }
        let average_b = summ / k;
        let grade;
        switch(true){
            case (average_b>=90):
                grade = "A";
                break;
            case (average_b>=80):
                grade = "В";
                break;
            case (average_b>=70):
                grade = "С";
                break;
            default:
                grade = "F";
        }
        students_itog.push({
            ...person,
            average: Number(average_b.toFixed(2)),
            grade: grade,
        })
    }
    return students_itog;
}

const students = [
    { name: "Алексей", scores: [85, 92, 78] },
    { name: "Мария", scores: [95, 87, 92] }
];
console.log(calculateGrade(students));
//№2
const filterProducts = (products, filters) => {
    if (!filters){
        return products;
    } 
    let filteredProducts = [];
    for (const product of products) {
        let allCorrectFilter = true;
        if (filters?.maxPrice !== undefined) {
            if (product.price > filters.maxPrice) {
                allCorrectFilter = false;
            }
        }
        if (filters?.category !== undefined) {
            if (product.category !== filters.category) {
                allCorrectFilter = false;
            }
        }
        if (allCorrectFilter) {
            filteredProducts.push(product);
        }
    }
    
    return filteredProducts;
};
const products = [
    { name: "Ноутбук", price: 50000, category: "электроника" },
    { name: "Стул", price: 5000, category: "мебель" },
    { name: "Кофеварка", price: 15000, category: "электроника" }
];
const filters = { maxPrice: 20000, category: "электроника" };
console.log(filterProducts(products, filters));
// Ожидаемый результат: [{ name: "Кофеварка", price: 15000, category: "электроника"