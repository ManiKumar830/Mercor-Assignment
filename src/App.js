import {Component} from "react"
import {AiOutlineStar, AiOutlineBars, AiOutlineOrderedList, AiOutlineMenuFold, AiOutlineMenuUnfold} from "react-icons/ai"
import {BsChatRightText, BsPrinter, BsTypeBold} from "react-icons/bs"
import {FiVideo} from "react-icons/fi"
import {BiLock, BiPaintRoll, BiItalic, BiAlignLeft} from "react-icons/bi"
import {RiArrowGoBackLine, RiArrowGoForwardLine, RiPencilFill} from 'react-icons/ri'
import {MdSpellcheck, MdFormatUnderlined, MdOutlineFormatColorText, MdKeyboardArrowUp} from "react-icons/md"
import {SlOptionsVertical} from "react-icons/sl"
import {HiOutlinePencil} from "react-icons/hi"

import './App.css';

class App extends Component { 
  state = {count: 11}

  render() {
    const {count} = this.state

    const onDecreaseCount = () => {
        if (this.state.count > 0) {
          this.setState(prevState => ({
            count: prevState.count - 1
          }))
        } 
    }

    const onIncreaseCount = () => {
      if (this.state.count > 0) {
        this.setState(prevState => ({
          count: prevState.count + 1
        }))
      } 
  }

    return (
      <div className="bg-container"> 
          <div className="title-container">
                <div className="title-left-container">
                    <div className="logo-container">
                        <img alt="logo" className="doc-logo" src="https://imgtr.ee/images/2023/05/20/2LFsX.png"/>
                    </div>
                    <div className="title-text-container">
                      <div className="text-star-container">
                           <h1 className="untitled-text">Untitled document</h1>
                           <AiOutlineStar className="star-icon"/>
                      </div>
                      <div className="top-options-container">
                        <p className="title-text-options">File</p>
                        <p className="title-text-options">Edit</p>
                        <p className="title-text-options">View</p>
                        <p className="title-text-options">Insert</p>
                        <p className="title-text-options">Format</p>
                        <p className="title-text-options">Tools</p>
                        <p className="title-text-options">Extensions</p>
                        <p className="title-text-options">Help</p>
                      </div>
                    </div>
                </div>

                <div className="top-right-container">
                    <BsChatRightText className="chat-icon"/>
                    <FiVideo className="chat-icon"/>
                    <div className="share-container">
                        <BiLock className="lock-icon"/>
                        <p className="share-text">Share</p>
                    </div>
                    <p className="user">M</p>
                </div>
          </div>

          <div className="tools-container">
             <RiArrowGoBackLine className="arrows"/>
             <RiArrowGoForwardLine className="arrows" />
             <BsPrinter className="printer-icon" />
             <MdSpellcheck className="printer-icon"/>
             <BiPaintRoll  className="printer-icon"/>

             <select className="dropdown-percent">
               <option className="percent-text">Fit</option>
               <option className="percent-text">50%</option>
               <option className="percent-text">75%</option>
               <option className="percent-text">90%</option>
               <option selected="select" className="percent-text">100%</option>
               <option className="percent-text">125%</option>
               <option className="percent-text">150%</option>
               <option className="percent-text">200%</option>
             </select>
             
             <div className="hr-container">
              <hr className="hr-line"/>
             </div>

             <select className="dropdown-text">
               <option className="normal-text">Normal text</option>
               <option className="title-text">Title</option>
               <option className="heading-1">Heading 1</option>
               <option className="heading-2">Heading 2</option>
               <option className="heading-3">Heading 3</option>
               <option className="options-text">Options</option>
             </select>

             <div className="hr-container">
              <hr className="hr-line"/>
             </div>

             <select className="dropdown-text">
                <option className="normal-text">Arial</option>
             </select>

             <div className="hr-container">
                 <hr className="hr-line"/>
             </div>

             <div className="counter-container">
                <button onClick={onDecreaseCount} className="decrease-button">-</button>
                <p className="count-text">{count}</p>
                <button onClick={onIncreaseCount} className="decrease-button">+</button>
             </div>

             <div className="hr-container">
                 <hr className="hr-line"/>
             </div>
             
             <BsTypeBold className="bold-icon"/>
             <BiItalic className="bold-icon"/>
             <MdFormatUnderlined className="bold-icon"/>
             <MdOutlineFormatColorText className="bold-icon"/>
             <RiPencilFill className="pen-icon"/>

             <div className="hr-container">
                 <hr className="hr-line"/>
             </div>

             <BiAlignLeft  className="option-icon" />
             <AiOutlineBars className="option-icon" />
             <AiOutlineOrderedList className="option-icon" />
             <AiOutlineMenuFold className="option-icon" />
             <AiOutlineMenuUnfold className="option-icon" />

             <div className="hr-container">
                 <hr className="hr-line"/>
             </div>


             <div className="options-icon-container">
                <SlOptionsVertical className="option-icon" />
                <HiOutlinePencil className="option-icon2" />
             </div>

             <div className="hr-container">
                 <hr className="hr-line"/>
             </div>

             <MdKeyboardArrowUp className="arrow-icon" />
          </div>

          <div className="bottom-input-container">
             <textarea placeholder="Type @ to insert" className="textarea" cols={150} rows={40}/>
          </div>
      </div>
    )
  }
}
export default App;
