// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://cra.link/PWA
// Этот необязательный код используется для регистрации работника службы.
// по умолчанию функция register() не вызывается.
// Это позволяет приложению загружаться быстрее при последующих посещениях рабочей среды и дает
// это автономные возможности. Однако это также означает, что разработчики (и пользователи)
// будут видеть развернутые обновления только при последующих посещениях страницы, после того как все
// существующие вкладки, открытые на странице, были закрыты, так как ранее кэшировались
// ресурсы обновляются в фоновом режиме.
// Чтобы узнать больше о преимуществах этой модели и инструкции о том, как
// подписывайтесь, читайте https://cra.link/PWA

const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
  // [::1] is the IPv6 localhost address.
  window.location.hostname === '[::1]' ||
  // 127.0.0.0/8 are considered localhost for IPv4.
  window.location.hostname.match(
    /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
  )
);

type Config = {
  onSuccess?: (registration: ServiceWorkerRegistration) => void;
  onUpdate?: (registration: ServiceWorkerRegistration) => void;
};

export function register(config?: Config) {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    // The URL constructor is available in all browsers that support SW.
    // Конструктор URL доступен во всех браузерах, поддерживающих SW.
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
    if (publicUrl.origin !== window.location.origin) {
      // Our service worker won't work if PUBLIC_URL is on a different origin
      // from what our page is served on. This might happen if a CDN is used to
      // serve assets; see https://github.com/facebook/create-react-app/issues/2374
      // Наш сервис-воркер не будет работать, если PUBLIC_URL находится в другом источнике
      // с чего обслуживается наша страница. Это может произойти, если CDN используется для
      // обслуживаем активы; см. https://github.com/facebook/create-react-app/issues/2374
      return;
    }

    window.addEventListener('load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

      if (isLocalhost) {
        // This is running on localhost. Let's check if a service worker still exists or not.
        // Это выполняется на локальном хосте. Давайте проверим, существует ли сервис-воркер или нет.
        checkValidServiceWorker(swUrl, config);


        // Add some additional logging to localhost, pointing developers to the
        // service worker/PWA documentation.
        // Добавляем дополнительную регистрацию на локальный хост, указывая разработчикам на
        // сервисный работник/документация PWA.
        navigator.serviceWorker.ready.then(() => {
          console.log(
            'This web app is being served cache-first by a service ' +
            'worker. To learn more, visit https://cra.link/PWA'
            //«Это веб-приложение сначала обслуживается кешем службой» +
            // рабочий. Чтобы узнать больше, посетите https://cra.link/PWA'
          );
        });
      } else {
        // Is not localhost. Just register service worker
        // Не является локальным хостом. Просто зарегистрируйте сервисного работника
        registerValidSW(swUrl, config);
      }
    });
  }
}

function registerValidSW(swUrl: string, config?: Config) {
  navigator.serviceWorker
    .register(swUrl)
    .then((registration) => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        if (installingWorker == null) {
          return;
        }
        installingWorker.onstatechange = () => {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              // At this point, the updated precached content has been fetched,
              // but the previous service worker will still serve the older
              // content until all client tabs are closed.
              // К этому моменту обновленный предварительно кэшированный контент был получен,
              // но предыдущий сервис-воркер будет обслуживать более старый
              // содержимое, пока все вкладки клиента не будут закрыты.
              console.log(
                `New content is available and will be used when all ' +
                'tabs for this page are closed. See https://cra.link/PWA.
                 Новый контент доступен и будет использоваться, когда все ' +
                'вкладки для этой страницы закрыты. См. https://cra.link/PWA»`
              );
              alert("доступно обновление, зактойте все вкладки что бы принять обнову")

              // Execute callback
              if (config && config.onUpdate) {
                config.onUpdate(registration);
              }
            } else {
              // At this point, everything has been precached.
              // It's the perfect time to display a
              // "Content is cached for offline use." message.
              // На данный момент все предварительно кэшировано.
              // Идеальное время для отображения
              // "Контент кэшируется для использования в автономном режиме." сообщение.
              console.log('Content is cached for offline use. = Контент кэшируется для использования в автономном режиме.');

              // Execute callback    Выполнить обратный вызов
              if (config && config.onSuccess) {
                config.onSuccess(registration);
              }
            }
          }
        };
      };
    })
    .catch((error) => {
      console.error(`Error during service worker registration:
      Ошибка при регистрации сервис-воркера:`, error);
    });
}

function checkValidServiceWorker(swUrl: string, config?: Config) {
  // Check if the service worker can be found. If it can't reload the page.
  // Проверяем, можно ли найти работника службы. Если он не может перезагрузить страницу.
  fetch(swUrl, {
    headers: { 'Service-Worker': 'script' },
  })
    .then((response) => {
      // Ensure service worker exists, and that we really are getting a JS file.
      // Убедитесь, что сервис-воркер существует и что мы действительно получаем JS-файл.
      const contentType = response.headers.get('content-type');
      if (
        response.status === 404 ||
        (contentType != null && contentType.indexOf('javascript') === -1)
      ) {
        // No service worker found. Probably a different app. Reload the page.
        // Сервисный работник не найден. Наверное другое приложение. Перезагрузите страницу.
        navigator.serviceWorker.ready.then((registration) => {
          registration.unregister().then(() => {
            window.location.reload();
          });
        });
      } else {
        // Service worker found. Proceed as normal.
        // Сервисный работник найден. Действуйте как обычно.
        registerValidSW(swUrl, config);
      }
    })
    .catch(() => {
      console.log(
        `No internet connection found. App is running in offline mode.
        'Подключение к Интернету не найдено. Приложение работает в автономном режиме».`
      );
      alert("Нет интернета")
    });
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        registration.unregister();
      })
      .catch((error) => {
        console.error(error.message);
      });
  }
}
