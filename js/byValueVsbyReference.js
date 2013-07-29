function changeStuff(num, obj1, obj2)
{
    num = num * 10;
    obj1.item = "changed";
    obj2 = {item: "changed"};
}

var num = 10;

var obj1 = {};
obj1.item = "unchanged";

var obj2 = {};
obj2.item = "unchanged";

changeStuff(num, obj1, obj2);
console.log(num);
console.log(obj1.item);
console.log(obj2.item);