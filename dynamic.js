function getfile(file,callback)
{
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("Application/json");
  xhr.open('GET',file,true)
  xhr.onreadystatechange=function()
  {
    if(xhr.readyState===4 && xhr.status=='200')
    {
      callback(xhr.responseText);
    }
  }
  xhr.send(null);
}
getfile("dynamic.json",function(text){
  var data=JSON.parse(text);
  console.log(data);
  profile(data.basics);
  career(data.career);
  education(data.education);
  skills(data.technicalskills);
})

var parent=document.querySelector('.parent');
var child=document.querySelector('.child');
var right=document.querySelector('.right');
function profile(pro)
{
var image=document.createElement('img');
image.src=pro.img;
child.appendChild(image);
parent.appendChild(child);
var name=document.createElement('h2');
name.textContent=pro.name;
child.appendChild(name);
parent.appendChild(child);
var hr=document.createElement('hr');
child.append(hr);
var email=document.createElement('h2');
email.textContent=pro.email;
child.appendChild(email);
parent.appendChild(child);
var job=document.createElement('h2');
job.textContent=pro.job;
child.appendChild(job);
parent.appendChild(child);
}
function career(c)
{
  var resume=document.createElement("h1");
  resume.textContent="resume";
  right.append(resume);
  var hh=document.createElement("hr");
  right.append(hh);
  var rh1=document.createElement("h1");
  rh1.textContent="career objective"
  right.append(rh1);
  var info=document.createElement("h3");
  info.textContent=c.info;
  right.append(info);
}

function education(edu)
{
  var edudet=document.createElement("h1");
  edudet.textContent="Educational Details";
  right.append(edudet);
  var hh1=document.createElement("hr");
  right.append(hh1);

  var table=document.createElement('table')
  table.border="1";
let row='';
row +="<tr>"
+"<th>"+"sno" +"</th>"
+"<th>"+"degree"+"</th>"+
"<th>"+"institute"+"</th>"+
"<th>"+"yop"+"</th>"+
"</tr>";

  for(i in edu){
  row +="<tr>"
  +"<td>"+edu[i].sno +"</td>"
  +"<td>"+edu[i].degree+"</td>"+
  "<td>"+edu[i].institute+"</td>"+
  "<td>"+edu[i].yop+"</td>"+
  "</tr>";
}
table.innerHTML=row;
right.appendChild(table);
parent.appendChild(right);
}
function skills(l)
{
  var skills=document.createElement("h1");
  skills.textContent="Technical Skills";
  right.append(skills);
  var hh2=document.createElement("hr");
  right.append(hh2);
  var ul=document.createElement(ul);
  right.append(ul);
  for(i in l)
  {
    var li=document.createElement("li");
    li.textContent=l[i].info;
    ul.append(li);
  }

}
