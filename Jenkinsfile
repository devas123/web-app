node {
    /* Requires the Docker Pipeline plugin to be installed */
    currentBuild.result = 'SUCCESS'
    stage("checkout") {
        checkout scm
    }
    stage("test") {
        docker.image('node:carbon').inside {
            sh 'cd frontend'
            sh 'npm prune'
            sh 'npm install'
            sh 'npm test'
        }
    }
    docker.withRegistry('http://95.169.186.20:8082/repository/compmanager-registry/', 'Nexus') {
        env.BUILD_ID = "test"
        env.IMAGE_NAME = "frontend"
        def customImage = null
        stage("build_docker") {
            try {
                customImage = docker.build("${env.IMAGE_NAME}:${env.BUILD_ID}")
            } catch (err) {
                currentBuild.result = 'FAILURE'
                print "Failed: ${err}"
                throw err
            }
        }
        if (env.BRANCH_NAME == 'master' && currentBuild.result == 'SUCCESS') {
            stage("push_image") {
                customImage.push()
            }
        }
    }
}
