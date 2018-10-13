function setStatus(newstatus)
{
  $("#bot").removeClass("speaking thinking");
  $("#bot").addClass(newstatus);
}