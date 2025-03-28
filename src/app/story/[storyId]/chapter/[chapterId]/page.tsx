import Reader from '@/components/reader/Reader';

// Demo chapter content for testing
const demoChapter = {
  title: 'A New Beginning',
  content: [
    "The sun crept slowly over the horizon, painting the sky in hues of orange and pink. Harry stood by the window of the Gryffindor dormitory, watching as the grounds of Hogwarts gradually came into view.",
    "It had been two months since the Battle of Hogwarts. Two months since Voldemort had fallen. Two months of rebuilding, of mourning, of trying to find a new normal. For Harry Potter, the Boy Who Lived Twice, it had been two months of wondering what came next.",
    "\"Can't sleep again?\" came Ron's voice from behind him, groggy with sleep.",
    "Harry turned to see his friend sitting up in bed, red hair tousled and eyes still half-closed. \"Just thinking,\" Harry replied, turning back to the window.",
    "\"You do too much of that these days,\" Ron yawned, swinging his legs over the side of the bed. \"Hermione says it's normal, though. Processing everything that happened.\"",
    "Harry nodded. Hermione, as usual, was probably right. They had all been through so much, seen so much. Lost so much. Sometimes Harry still couldn't believe it was over, that they had actually won.",
    "\"McGonagall wants to see us after breakfast,\" Ron said, breaking into Harry's thoughts. \"Something about the rebuilding committee.\"",
    "As the newly appointed Headmistress, Minerva McGonagall had been instrumental in organizing the restoration of Hogwarts. The castle had suffered extensive damage during the battle, and while much had been repaired through magic, there was still work to be done.",
    "\"I'll be there,\" Harry said, finally turning away from the window. \"I should probably shower and get ready.\"",
    "Ron nodded, stretching his arms above his head. \"I heard the house-elves are making treacle tart for breakfast. Your favorite.\"",
    "Despite everything, Harry felt a small smile tug at his lips. Some things never changed, and Ron's ability to think about food even in the most serious of moments was one of them.",
    "As he gathered his things for the shower, Harry's mind wandered to the letter he had received yesterday from the Ministry of Magic. An offer to join the Auror training program without having to complete his N.E.W.T.s. It was what he had always wanted, wasn't it? To become an Auror, to fight dark wizards?",
    "But now, after everything, Harry wasn't so sure. He had spent his entire young life fighting darkness. Did he want to make that his career as well?",
    "\"You coming?\" Ron called from the doorway.",
    "\"Yeah,\" Harry replied, pushing the thoughts away for now. There would be time to decide later. For now, there was treacle tart waiting, and friends to talk to, and a castle to rebuild.",
    "As they walked down the stairs to the common room, Harry felt a sense of peace wash over him. Hogwarts had always been his first real home. And even with everything that had happened here, both good and terrible, it still was.",
    "Hermione was waiting for them by the fireplace, a thick book open on her lap. Some things really never did change.",
    "\"Morning,\" she greeted them, closing her book. \"Sleep well?\"",
    "\"Harry was up watching the sunrise again,\" Ron said before Harry could answer.",
    "Hermione's expression softened as she looked at Harry. \"It's a beautiful view from the tower,\" she said simply, not pushing for more.",
    "Harry nodded gratefully. That was one of the things he appreciated most about his friends. They understood when to ask questions and when to simply be there.",
    "\"Shall we head down to breakfast?\" Hermione suggested, standing up. \"I heard there's treacle tart this morning.\"",
    "Ron grinned. \"See? Even Hermione knows the important things.\"",
    "As they climbed through the portrait hole and headed down the moving staircases, Harry felt the weight on his shoulders lighten just a bit. The future was uncertain, yes, but it was also full of possibilities. And whatever came next, he wouldn't face it alone.",
    "The Great Hall was already filled with students when they arrived. The enchanted ceiling above showed the same clear blue sky that Harry had watched from the tower. As they took their seats at the Gryffindor table, several people called out greetings.",
    "There was still a reverence that followed Harry wherever he went these days, a kind of awe in people's eyes that made him uncomfortable. But it was getting better. Slowly, he was becoming just Harry again, not the Chosen One or the Boy Who Lived.",
    "As he reached for a piece of the promised treacle tart, Harry caught sight of Ginny entering the Hall with some of her classmates. Their eyes met across the room, and she smiled at him—a real smile, not the shy, star-struck one from years ago, but one full of understanding and shared experiences.",
    "Yes, Harry thought as he returned her smile, whatever came next, it would be alright. The scar had not pained him in two months. All was well."
  ],
  number: 1,
  totalChapters: 12,
  author: {
    name: 'J.K. Potter',
    id: 'author-1',
  },
  wordCount: 742,
  publishedAt: 'March 15, 2025',
};

interface ReaderPageProps {
  params: {
    storyId: string;
    chapterId: string;
  };
}

export default function ReaderPage({ params }: ReaderPageProps) {
  const { storyId, chapterId } = params;
  
  // In a real app, you would fetch the chapter data based on storyId and chapterId
  // For now, we're using demo content
  
  return (
    <div className="reader-page">
      <Reader 
        storyId={storyId} 
        chapterId={chapterId}
        chapter={demoChapter}
      />
    </div>
  );
}