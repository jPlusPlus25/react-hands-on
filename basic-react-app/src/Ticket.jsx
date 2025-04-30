import TicketNum from "./TicketNum"
export default function Ticket({ticket}){
    return (
    
    <div>
        
        <TicketNum num = {ticket[0]}/>
        <TicketNum num = {ticket[1]}/>
        <TicketNum num = {ticket[2]}/>
    </div>
    );
}