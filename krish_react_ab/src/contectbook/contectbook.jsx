import React,{Component} from "react";
class Contectbook extends Component{
    constructor(props){
        super(props);
        this.state={
            contacts:[],
            frame : "" ,
            lname : "" ,
            phone : "" ,
            editingId: null
        };
    }
    
    handleInputChange=(field, value)=>{
        this.setState({
            [field]: value
        });
    };
    
    addContact=()=>{
        const {frame, lname, phone, editingId} = this.state;
        if(frame.trim() && lname.trim() && phone.trim()){
            if(editingId !== null){
                // Update existing contact
                this.setState((prevState)=>({
                    contacts: prevState.contacts.map(contact => 
                        contact.id === editingId 
                            ? {...contact, frame, lname, phone}
                            : contact
                    ),
                    frame: "",
                    lname: "",
                    phone: "",
                    editingId: null
                }));
            } else {
                // Add new contact
                const newContact = {
                    id: Date.now(),
                    frame,
                    lname,
                    phone
                };
                this.setState((prevState)=>({
                    contacts: [...prevState.contacts, newContact],
                    frame: "",
                    lname: "",
                    phone: ""
                }));
            }
        }
    };
    
    deleteContact=(id)=>{
        this.setState((prevState)=>({
            contacts: prevState.contacts.filter(contact => contact.id !== id)
        }));
    };
    
    editContact=(id)=>{
        const contactToEdit = this.state.contacts.find(contact => contact.id === id);
        this.setState({
            frame: contactToEdit.frame,
            lname: contactToEdit.lname,
            phone: contactToEdit.phone,
            editingId: id
        });
    };
    
    cancelEdit=()=>{
        this.setState({
            frame: "",
            lname: "",
            phone: "",
            editingId: null
        });
    };
    
    viewContact=(id)=>{
        const contactToView = this.state.contacts.find(contact => contact.id === id);
        alert(`Name: ${contactToView.frame} ${contactToView.lname}\nPhone: ${contactToView.phone}`);
    };
    
    render(){
        const {contacts,frame,lname,phone,editingId}=this.state;
        return(
            <>
            <input 
                type="text" 
                value={frame} 
                onChange={(e) => this.handleInputChange('frame', e.target.value)}
                placeholder="First Name"
            />
            <input 
                type="text" 
                value={lname} 
                onChange={(e) => this.handleInputChange('lname', e.target.value)}
                placeholder="Last Name"
            />
            <input 
                type="text" 
                value={phone} 
                onChange={(e) => this.handleInputChange('phone', e.target.value)}
                placeholder="Phone Number"
            />
            <br />
            <button onClick={this.addContact}>
                {editingId !== null ? 'Update Contact' : 'Add Contact'}
            </button>
            {editingId !== null && (
                <button onClick={this.cancelEdit}>Cancel</button>
            )}
            <br />
            <ul>
                {contacts.map((contact) => (
                    <li key={contact.id}>
                        {contact.frame} {contact.lname} - {contact.phone}
                        <button onClick={() => this.deleteContact(contact.id)}>Delete</button>
                        <button onClick={() => this.editContact(contact.id)}>Edit</button>
                        <button onClick={() => this.viewContact(contact.id)}>View</button>
                    </li>
                ))}
            </ul>
            </>
        );
    }
}

export default Contectbook;