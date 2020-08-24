function Student(name,age,cgpa){
    this.name = name;
    this.age= age;
    this.cgpa = cgpa;
    this.display = function(){
        console.log(this.name)
        console.log(this.age)
        console.log(this.cgpa)

    } 

}

var st = new Student('mamun',22,4.00);
st.display();