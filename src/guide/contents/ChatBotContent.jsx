import { ChatBot } from '@/components/';

export default function ChatBotContent() {
  return (
    <>
      <div className="guide-page__title">
        <h2>ChatBot</h2>
      </div>
      <div className="guide-page__box">
        <div className="guide-page__box--tit">
          <h3></h3>
        </div>

        <div className="guide-page__box--cont">
          <ChatBot />
        </div>
      </div>
    </>
  );
}
