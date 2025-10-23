export function ImmersiveBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/80 via-pink-50/80 to-blue-50/80" />
      
      <div className="absolute top-0 left-0 w-full h-full pattern-dots opacity-40" />
      
      <div className="absolute top-[10%] left-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-purple-400/30 to-pink-400/20 blur-3xl float-animation" style={{ animationDelay: '0s', animationDuration: '8s' }} />
      <div className="absolute top-[50%] right-[5%] w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-blue-400/30 to-cyan-400/20 blur-3xl float-animation" style={{ animationDelay: '2s', animationDuration: '10s' }} />
      <div className="absolute bottom-[10%] left-[40%] w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-pink-400/25 to-purple-400/20 blur-3xl float-animation" style={{ animationDelay: '4s', animationDuration: '9s' }} />
      
      <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-white/40" />
    </div>
  );
}
