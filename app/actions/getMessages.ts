import {db} from '@/app/libs/prismadb';

const getMessages = async (conversationId: string) => {
  try {
    const messages = await db.message.findMany({
      where: {
        conversationId,
      },
      include: {
        sender: true,
        seen: true,
      },
      orderBy: {
        createdAt: 'asc',
      },
    });

    return messages;
  } catch (error: any) {
    return [];
  }
};

export default getMessages;
