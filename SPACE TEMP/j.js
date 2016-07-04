
A=new Array("images/2.png","images/3.png","images/1.png");
 
function changa()
{
document.getElementById("image").src = A[0];	
}
function changb()
{
document.getElementById("image").src = A[1];	
}
function changc()
{
document.getElementById("image").src = A[2];	
}
function completef()
{



setTimeout(changa,500);
setTimeout(changb,1000);
setTimeout(changc,1500);
setTimeout(changa,2000);
setTimeout(changb,2500);
setTimeout(changc,3000);
setTimeout(changa,3500);
setTimeout(changb,4000);
setTimeout(changc,4500);
setTimeout(changa,5000);
setTimeout(changb,5500);
setTimeout(changc,6000);

} 

