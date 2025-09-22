import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

const AboutSection = () => {

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-left">Tout savoir sur notre service Hajj</h1>
            <h2 className="text-gray-500 font-medium text-xl text-left">Pour plus d’informations consulter notre <span className="text-gold">page d’aide.</span></h2>

            <div className="grid md:grid-cols-10 gap-12 mt-10 mx-auto place-items-center">
                <div className="md:col-span-5">
                    <Accordion.Root
                        type="single"
                        collapsible
                        className="w-full border rounded-lg md:w-[500px] min-w-[300px]"
                    >
                        {/* Premier accordion item */}
                        <Accordion.Item value="item-1" className="bg-transparent border-b border-gray-200">
                            <Accordion.Header>
                                <Accordion.Trigger className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-gray-800 focus:outline-none transition-colors group">
                                    <span className='font-semibold'>Qu’est-ce que le Hajj ?</span>
                                    <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                                </Accordion.Trigger>
                            </Accordion.Header>
                            <Accordion.Content className="overflow-hidden px-2 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                                <span className='text-left'>Text ...</span>
                            </Accordion.Content>
                        </Accordion.Item>
                        <Accordion.Item value="item-2" className="bg-transparent border-b border-gray-200">
                            <Accordion.Header>
                                <Accordion.Trigger className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-gray-800 focus:outline-none transition-colors group">
                                    <span className='font-semibold'>Quand a lieu le Hajj ?</span>
                                    <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                                </Accordion.Trigger>
                            </Accordion.Header>
                            <Accordion.Content className="overflow-hidden px-2 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                                <span className='text-left'>Text ...</span>
                            </Accordion.Content>
                        </Accordion.Item>
                        <Accordion.Item value="item-3" className="bg-transparent">
                            <Accordion.Header>
                                <Accordion.Trigger className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-gray-800 focus:outline-none transition-colors group">
                                    <span className='font-semibold'>Qui est obligé de faire le Hajj ?</span>
                                    <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                                </Accordion.Trigger>
                            </Accordion.Header>
                            <Accordion.Content className="overflow-hidden px-2 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                                <span className='text-left'>Text ...</span>
                            </Accordion.Content>
                        </Accordion.Item>
                    </Accordion.Root>
                </div>
                <div className="md:col-span-5">
                    <Accordion.Root
                        type="single"
                        collapsible
                        className="w-full border rounded-lg md:w-[500px]"
                    >
                        {/* Premier accordion item */}
                        <Accordion.Item value="item-1" className="bg-transparent border-b border-gray-200">
                            <Accordion.Header>
                                <Accordion.Trigger className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-gray-800 focus:outline-none transition-colors group">
                                    <span className='font-semibold'>Quelles sont les principales étapes du Hajj ?</span>
                                    <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                                </Accordion.Trigger>
                            </Accordion.Header>
                            <Accordion.Content className="overflow-hidden px-2 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                                <span className='text-left'>Text ...</span>
                            </Accordion.Content>
                        </Accordion.Item>
                        <Accordion.Item value="item-2" className="bg-transparent border-b border-gray-200">
                            <Accordion.Header>
                                <Accordion.Trigger className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-gray-800 focus:outline-none transition-colors group">
                                    <span className='font-semibold'>Quelle est la différence entre le Hajj et la ‘Umra ?</span>
                                    <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                                </Accordion.Trigger>
                            </Accordion.Header>
                            <Accordion.Content className="overflow-hidden px-2 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                                <span className='text-left'>Text ...</span>
                            </Accordion.Content>
                        </Accordion.Item>
                        <Accordion.Item value="item-3" className="bg-transparent">
                            <Accordion.Header>
                                <Accordion.Trigger className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-gray-800 focus:outline-none transition-colors group">
                                    <span className='font-semibold'>Quels sont les bienfaits du Hajj ?</span>
                                    <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                                </Accordion.Trigger>
                            </Accordion.Header>
                            <Accordion.Content className="overflow-hidden px-2 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                                <span className='text-left'>Text ...</span>
                            </Accordion.Content>
                        </Accordion.Item>
                    </Accordion.Root>
                </div>
            </div>

        </div>
    )
}
export default AboutSection;