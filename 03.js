const dataCsv = [
    {"name": "Xiaomi Redmi 5A", "category": "Smartphone", "price": "1199000"},        
    {"name": "Macbook Air", "category": "Laptop", "price": "13775000"},
    {"name": "Samsung Galaxy J7", "category": "Smartphone", "price": "3549000"},
    {"name": "DELL XPS 13", "category": "Laptop", "price": "26799000"},
    {"name": "Xiaomi Mi 6", "category": "Smartphone", "price": "5399000"},
    {"name": "LG V30 Plus", "category": "Smartphone", "price": "10499000"},
    ];    

    dataCsv.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    console.log(dataCsv);