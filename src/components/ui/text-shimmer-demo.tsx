import { TextShimmer } from '@/components/ui/text-shimmer';

export function TextShimmerBasic() {
  return (
    <TextShimmer className='font-mono text-sm' duration={1}>
      Generating code...
    </TextShimmer>
  );
}

export function TextShimmerColor() {
  return (
    <TextShimmer
      duration={1.2}
      className='text-xl font-medium [--base-color:theme(colors.blue.600)] [--base-gradient-color:theme(colors.blue.200)] dark:[--base-color:theme(colors.blue.700)] dark:[--base-gradient-color:theme(colors.blue.400)]'
    >
      Hi, how are you?
    </TextShimmer>
  );
}

export default function TextShimmerDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-8 gap-8">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-bold">Text Shimmer Demo</h1>
        <p className="text-sm text-gray-600">Ejemplos del componente TextShimmer</p>
      </div>
      
      <div className="flex flex-col items-center gap-6 p-8 rounded-2xl border border-gray-200 bg-gray-50 w-full max-w-md">
        <div className="space-y-2 text-center">
          <h2 className="text-lg font-semibold">Básico</h2>
          <TextShimmerBasic />
        </div>
        
        <div className="space-y-2 text-center">
          <h2 className="text-lg font-semibold">Con Color Personalizado</h2>
          <TextShimmerColor />
        </div>
        
        <div className="space-y-2 text-center">
          <h2 className="text-lg font-semibold">Títulos</h2>
          <TextShimmer 
            as="h1" 
            className="text-3xl font-bold"
            duration={1.5}
          >
            Bienvenido a CleverID
          </TextShimmer>
        </div>
      </div>
    </div>
  );
}