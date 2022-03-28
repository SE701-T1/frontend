import React, { useState } from 'react';
import { IconButton, InputBase } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { styled } from '@mui/material/styles';
import Picker from 'emoji-picker-react';
import PropTypes from 'prop-types';
import styles from './ChatInput.module.css';

const CustomInput = styled(InputBase)(() => ({
  '& .MuiInputBase-input': {
    height: 'auto',
    fontSize: 16,
    color: '#7A7A7A',
    padding: 0,
  },
}));

/**
 * ChatInput is the component that handles the input of the user in the chat.
 * This component includes the emoji selector and submit button.
 */
function ChatInput({ onSend, disable }) {
  const [inputText, setInputText] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const onEmojiClick = (event, emojiObject) => {
    setInputText(inputText + emojiObject.emoji);
  };

  const onSubmit = () => {
    onSend(inputText);
    setInputText('');
  };

  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      onSubmit();
    }
  };

  return (
    <div className={styles.container}>
      <CustomInput
        disabled={disable}
        className={styles.input}
        placeholder="Aa"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={onKeyPress}
      />
      <div className={styles.buttonContainer}>
        <IconButton
          disabled={disable}
          data-testid="EmojiButton"
          className={styles.button}
          aria-label="directions"
          onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
          <EmojiEmotionsIcon />
        </IconButton>
        {showEmojiPicker && (
          <div data-testid="EmojiSelector" className={styles.emojiButton}>
            <Picker disableSearchBar disableSkinTonePicker onEmojiClick={onEmojiClick} />
          </div>
        )}
      </div>
      <IconButton
        disabled={disable}
        data-testid="SendButton"
        className={styles.button}
        aria-label="send"
        onClick={onSubmit}>
        <SendIcon />
      </IconButton>
    </div>
  );
}

ChatInput.propTypes = {
  onSend: PropTypes.func.isRequired,
};

export default ChatInput;
