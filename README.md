**Ссылка на сайт**
http://45.131.186.206/

## Инструкция по запуску

**Для работы необходимо следующее**
1. nodejs 
2. npm
3. docker

**Backend:**
1. Перейдите в папку backend
2. Создайте файл .env и вставьте туда этот код
```
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/app_db?schema=public"
JWT_SECRET="secret"
PORT = 3000
```
**В терминале написать**<br/>


3. В терминале написать:
    1) ```npm i```
    2) ```npm run prisma db push```
    3) ```npm run prisma generate```
    4) 
    ```
    docker run -d \
      --name postgres-technostrelka \
      -p 5432:5432 \
      -e POSTGRES_PASSWORD=postgres \
      -e POSTGRES_DB=app_db\
      -e PGDATA=/var/lib/postgresql/data/pgdata \
      -v postgres_data:/var/lib/postgresql/data \
      postgres
    ```
    5) 
    ```
    docker run -d \
      --name minio-technostrelka \
      -p 9000:9000 \
      -p 9001:9001 \
      -e "MINIO_ROOT_USER=minioadmin" \
      -e "MINIO_ROOT_PASSWORD=minioadmin" \
      -v minio-data:/data \
      minio/minio server /data --console-address ":9001"
    ```
    6) ```npm run dev```

4. Для того, чтобы видеть базовые аватары пользователей, надо: 
    1) перейти по ссылке http://localhost:9001
    2) если появляется окно входа, то написать
      * user: minioadmin
      * password: minioadmin
    3) создать bucket под названием: <strong>technostrelka-2026</strong>
    4) скачать файл default-avatar.png и добавить его в этот bucket

**Frontend:**
1. Перейдите в папку frontend
2. В терминале написать:
    1) ```docker build -t flutter_app .```
    2) ```docker run -p 80:80 flutter_app  ```
3. Перейти по ссылке http://localhost

**Android:**
1. Запустить эмулятор
2. Перейти в папку android
3. В терминале написать 
```adb install app-release.apk```
4. Запустить установленное приложение


<!-- 
**Frontend:**
1. Перейдите в папку frontend
2. В терминале написать:
    1) ```docker build -t flutter_app .```
    2) ```docker run -p 8080:8080 flutter_app  ```
3. Перейти по ссылке http://localhost:8080

**Android:**
1. Запустить эмулятор
2. Перейти в папку android
3. В терминале написать 
```adb install app-release.apk```
4. Запустить установленное приложение

**IOS:**
1. Запустить эмулятор
2. Перейти в папку ios
3. Перетащить файл Runner.app в эмулятор айфона
4. Запустить установленное приложение -->