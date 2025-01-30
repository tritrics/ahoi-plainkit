FROM php:8.2.22-apache
COPY ./apache.conf /etc/apache2/conf-enabled/
COPY ./host.conf /etc/apache2/sites-available/000-default.conf
COPY ./php.ini /usr/local/etc/php/
RUN rm /etc/apache2/conf-enabled/other-vhosts-access-log.conf
RUN apt-get update && apt-get install -y \
		libfreetype6-dev \
		libjpeg62-turbo-dev \
		libpng-dev \
	&& docker-php-ext-configure gd --with-freetype --with-jpeg \
	&& docker-php-ext-install -j$(nproc) gd
RUN a2enmod rewrite
RUN a2enmod headers
RUN apt-get install -y \
	libpng-dev \
	libjpeg-dev \
	libwebp-dev;
RUN docker-php-ext-configure gd --enable-gd --with-webp --with-freetype --with-jpeg=/usr/local/lib
RUN docker-php-ext-install gd