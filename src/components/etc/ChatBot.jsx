import { useState, useRef, useEffect } from 'react';
import {
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Box,
  CircularProgress,
} from '@mui/material';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const ChatBot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const askAI = async () => {
    if (!input.trim() || loading) return; // 중복 요청 방지

    setMessages(prev => [...prev, { role: 'user', text: input }]);
    setLoading(true);

    const apiKey = import.meta.env.VITE_OPENAI_KEY;
    const data = {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: input }],
      max_tokens: 150, // 무료 계정 부담 최소화
      temperature: 0.7,
    };

    try {
      const response = await fetch(
        'https://api.openai.com/v1/chat/completions',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify(data),
        },
      );

      if (!response.ok) {
        const errorText = await response.text();
        console.error('API Error:', response.status, errorText);

        setMessages(prev => [
          ...prev,
          {
            role: 'ai',
            text:
              response.status === 429
                ? '쿼터 초과! 잠시 후 다시 시도해주세요.'
                : 'AI 서버 에러가 발생했습니다.',
          },
        ]);
      } else {
        const result = await response.json();
        const aiMessage =
          result.choices?.[0]?.message?.content || '응답이 없습니다.';
        setMessages(prev => [...prev, { role: 'ai', text: aiMessage }]);
      }
    } catch (err) {
      console.error(err);
      setMessages(prev => [
        ...prev,
        { role: 'ai', text: '오류가 발생했습니다.' },
      ]);
    }

    setInput('');
    setLoading(false);
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      askAI();
    }
  };

  return (
    <Card
      sx={{
        maxWidth: 500,
        width: '95%',
        margin: '50px 0',
        padding: 2,
        height: '60vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardContent sx={{ flex: 1, overflowY: 'auto', mb: 2 }}>
        <Typography variant="h5" gutterBottom>
          AI 챗봇 (무료 테스트용)
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Typography
                variant="body1"
                sx={{
                  textAlign: msg.role === 'user' ? 'right' : 'left',
                  background:
                    msg.role === 'user'
                      ? 'linear-gradient(45deg, #1976d2, #42a5f5)'
                      : 'linear-gradient(45deg, #e0e0e0, #bdbdbd)',
                  color: msg.role === 'user' ? '#fff' : '#000',
                  borderRadius: 2,
                  padding: 1,
                  marginBottom: 1,
                  maxWidth: '95%',
                  alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  wordBreak: 'break-word',
                }}
              >
                {msg.text}
              </Typography>
            </motion.div>
          ))}

          {loading && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CircularProgress size={20} />
              <Typography variant="body2">입력 중...</Typography>
            </Box>
          )}

          <div ref={messagesEndRef} />
        </Box>
      </CardContent>

      <Box sx={{ display: 'flex', gap: 1 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="질문을 입력하세요"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          multiline
          maxRows={4}
        />
        <Button variant="contained" onClick={askAI} disabled={loading}>
          전송
        </Button>
      </Box>
    </Card>
  );
};

export default ChatBot;
