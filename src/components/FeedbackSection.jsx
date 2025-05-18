import "./FeedbackSection.css"
import { SendHorizontal } from 'lucide-react';


const FeedbackSection = () => {
  
  return (
      <section className='feedback-section'>
        <h3>
          WI Chat
        </h3>
        
        <label
          htmlFor="name">
            How can I help you?
        </label>

        <div
          className='chat-input'
        >
          <input
            placeholder="Ask anything"
            type="text"
            id="name"
            className=""
            
          />         

          <button
            className=''
            >
              <SendHorizontal />
          </button>
        </div>  
      </section>
  );
}

export default FeedbackSection