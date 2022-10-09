<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit7b2df3f4fb13a54278abb6fc7152fb1c
{
    public static $files = array (
        '337663d83d8353cc8c7847676b3b0937' => __DIR__ . '/..' . '/kahlan/kahlan/src/functions.php',
    );

    public static $prefixLengthsPsr4 = array (
        'K' => 
        array (
            'Kahlan\\' => 7,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Kahlan\\' => 
        array (
            0 => __DIR__ . '/..' . '/kahlan/kahlan/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit7b2df3f4fb13a54278abb6fc7152fb1c::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit7b2df3f4fb13a54278abb6fc7152fb1c::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit7b2df3f4fb13a54278abb6fc7152fb1c::$classMap;

        }, null, ClassLoader::class);
    }
}
