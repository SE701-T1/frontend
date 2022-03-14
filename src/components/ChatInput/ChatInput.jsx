import React, {useState} from 'react';
import {IconButton, InputBase} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import {styled} from "@mui/material/styles";
import Picker from "emoji-picker-react";
import PropTypes from "prop-types";
import styles from "./ChatInput.module.css";

const CustomInput = styled(InputBase)(() => ({
  '& .MuiInputBase-input': {
    height: "auto",
    fontSize: 16,
    color: '#7A7A7A',
    padding: 0
  }
}));

function ChatInput({onSend}) {
  const [inputText, setInputText] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const onEmojiClick = (event, emojiObject) => {
    setInputText(inputText + emojiObject.emoji);
  };

  return (
    <div className={styles.container}>
      <CustomInput className={styles.input} inputRef={(input) => {
        if (input != null) {
          input.focus();
        }
      }} placeholder="Aa" value={inputText} onChange={(e) => setInputText(e.target.value)}/>
      <div className={styles.buttonContainer}>
        <IconButton className={styles.button} aria-label="directions"
                    onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
          <EmojiEmotionsIcon/>
        </IconButton>
        {showEmojiPicker && <div className={styles.emojiButton}>
          <Picker disableSearchBar disableSkinTonePicker onEmojiClick={onEmojiClick}/>
        </div>}
      </div>
      <IconButton className={styles.button} aria-label="send" onClick={() => {
        onSend(inputText);
        setInputText('');
      }}>
        <SendIcon/>
      </IconButton>
    </div>
  );
}

ChatInput.propTypes = {
  onSend: PropTypes.func.isRequired,
};

export default ChatInput;
