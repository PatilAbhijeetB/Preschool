import { Injectable } from "@angular/core";



@Injectable()
export class ProgramServices {

    programmeDetails = [{event_id:1,title:"SchoolDay",description:"Today is School Day",date:"1534187820994",imageurl:"assets/1.jpg"},
                        {event_id:2,title:"ParentMeeting",description:"Today is ParentMeeting",date:"1534257820994",imageurl:"assets/11.jpg"},
                        {event_id:3,title:"IndependanceDay",description:"Today is IndependanceDay",date:"1534357820994",imageurl:"assets/12.jpg"},
                        {event_id:4,title:"SportsDay",description:"Today is SportsDay",date:"1534159820994",imageurl:"assets/13.jpg"},
                        {event_id:5,title:"HistoryDay",description:"Today is HistoryDay",date:"1524157820994",imageurl:"./assets/14.jpg"},
                        {event_id:6,title:"AnnualFunction",description:"Today is AnnualFunction",date:"1334157820994",imageurl:"./assets/11.jpg"},
                        {event_id:7,title:"Holiday",description:"Today is Holiday",date:"1334157820994",imageurl:"./assets/12.jpg"},
                        {event_id:8,title:"OralExam",description:"Today is OralExam",date:"1535157820994",imageurl:"./assets/11.jpg"}];

    getAll():any[]{
        return this.programmeDetails;
    }

    getById(id:number):any{
        var programme = this.programmeDetails.find((item)=>{
            return (item.event_id === id)
        });
        return programme;
    }
  
  
   
    

}