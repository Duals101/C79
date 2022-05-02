arrayj=[];

function Submit_function()

{
    arrayj.push(document.getElementById("student-1").value);
    arrayj.push(document.getElementById("student-2").value);
    arrayj.push(document.getElementById("student-3").value);
    arrayj.push(document.getElementById("student-4").value);

    document.getElementById("Students").innerHTML=arrayj;
    document.getElementById("submit").style.display="none";
    document.getElementById("sort").style.display="inline-block";

}

function Sort_function()

{
    arrayj.sort();
    document.getElementById("Students").innerHTML=arrayj;
}