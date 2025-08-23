const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Test - simple button without i18n first */}
      <div className="absolute top-4 right-4 z-50">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          🇺🇸 EN | 🇵🇱 PL
        </button>
      </div>
      
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Your Blank App</h1>
          <p className="text-xl text-muted-foreground">Start building your amazing project here!</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
