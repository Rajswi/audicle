export default function FAQ() {
  const faqData = [
    {
      question: "Do I need any special equipment?",
      answer:
        "No! Audicle works directly in your browser. All you need is a computer with a microphone. For the best quality, we recommend an external USB microphone, but your computer's built-in mic works too.",
    },
    {
      question: "Can I record with remote guests?",
      answer:
        "Absolutely. You can invite guests from anywhere in the world with a simple link. Audicle records each participant on a separate audio track for maximum control during editing.",
    },
    {
      question: "How does the AI editing work?",
      answer:
        "Our AI automatically analyzes your audio to detect and remove long pauses, filler words (like 'um' and 'uh'), and can even balance the volume levels between different speakers, saving you hours of manual editing.",
    },
    {
      question: "Where can I publish my podcast?",
      answer:
        "Audicle allows for one-click publishing to all major platforms, including Spotify, Apple Podcasts, Google Podcasts, and more. You can manage your distribution right from your dashboard.",
    },
    {
      question: "What is your refund policy?",
      answer:
        "We offer a 30-day money-back guarantee on all our paid plans. If you're not satisfied for any reason, just contact support within 30 days for a full refund.",
    },
    {
      question: "Can I import existing audio files?",
      answer:
        "Yes, you can upload existing audio files (like intros, outros, or pre-recorded segments) directly into the Audicle editor to incorporate them into your episodes.",
    },
  ];
  return (
    <section className="scroll-py-16 py-16 md:scroll-py-32 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        
          <div className="text-center lg:text-left">
            <div className="text-center">
              <h2 className="text-3xl font-semibold md:text-4xl">
                Frequently asked questions
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                If you have anything else you want to ask,{" "}
                <a
                  href="mailto:support@audicle.com"
                  className="text-red-600 hover:underline"
                >
                  reach out to us
                </a>
              </p>
            </div>
            {/* This is the new multi-column FAQ grid */}
<div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
    {faqData.map((item, index) => (
        <div key={index}>
            <h3 className="font-semibold text-lg">{item.question}</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">{item.answer}</p>
        </div>
    ))}
</div>
        </div>
          
      </div>
    </section>
  );
}
