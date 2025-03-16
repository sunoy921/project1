let numberofcharc =100;
let contents = document.querySelectorAll(".content");
content.array.forEach(element => {
  if (length.textcontent.length<no.numberofcharc)
  {
    content.nextElementSibling.style.display="none";
  }
  else {
    let displayText = content.textcontent.slice (0,noofcharac);
 let moreText = content.textcontent.slice
 (noofcharac);
 content.innerHTML = `${displayText}<span class="dots">...</span><span class="hide more">${moreText}</span>`
  }
});

function readMore(btn) {
  let post = btn.parentElement;
  post.querySelector(".dots").classList.toggle("hide");
  post.querySelector(".more").classList.toggle
  ("hide");
  btn.textcontent=="Read More" ? btn.textcontent
  = "Read Less" : btn.textcontent = "Read More";
}