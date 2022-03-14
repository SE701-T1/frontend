import React, { useState} from 'react';
import {IconButton, InputBase} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import {styled} from "@mui/material/styles";
import Picker from "emoji-picker-react";

const CustomInput = styled(InputBase)(() => ({
  borderRadius: '25px',
  backgroundColor: '#F0F0F0',
  paddingLeft: '15px',
  paddingRight: '15px',
  paddingTop: '5px',
  paddingBottom: '5px',
  color: '#7A7A7A',
  flex: 1,
}));

function ChatInput() {
  const [inputText, setInputText] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const onEmojiClick = (event, emojiObject) => {
    setInputText(inputText + emojiObject.emoji);
    console.log(inputText)
  };

  return (
    <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
      <CustomInput inputRef={(input) => {
        if (input != null) {
          input.focus();
        }
      }} placeholder="Aa" value={inputText} onChange={(e) => setInputText(e.target.value)}/>
      <div style={{position: "relative"}}>
        <IconButton aria-label="directions" onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
          <EmojiEmotionsIcon/>
        </IconButton>
        {showEmojiPicker && <div style={{position: "absolute", bottom: "50px", right: "0px"}}>
          <Picker disableSearchBar disableSkinTonePicker onEmojiClick={onEmojiClick}/>
        </div>}
      </div>
      <IconButton aria-label="send">
        <SendIcon/>
      </IconButton>
    </div>
  );
}

export default ChatInput;
