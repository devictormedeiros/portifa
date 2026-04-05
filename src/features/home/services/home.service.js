import getAPI from "@/services/api";

/**
 * Home (`/portifa/v1/home`). Bloco usado em `Call` (`data.scroll`):
 * mantém `frames_desk` / `frames_mob` (sequência de imagens).
 * Opcional no WordPress/ACF: `video_scroll_desktop` e `video_scroll_mobile`
 * (URL string ou `{ url }`) — se existirem, a seção Call usa scrub de vídeo.
 */
export async function getHomeData() {
  const data = await getAPI(`/portifa/v1/home`, {
    revalidate: 300,
  });

  return data;
}
